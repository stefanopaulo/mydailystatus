import { db } from '../../lib/db'
import admin from 'firebase-admin'
import auth0 from '../../lib/auth0'

const saveStatus = async (req, res) => {
    const session = await auth0.getSession(req)
    
    if(session) {
        const dados = req.body
    
        await db
                .collection('test')
                .add({
                    status: dados.status,
                    coordinates: new admin.firestore.GeoPoint(dados.coords.lat, dados.coords.long)
                })
        res.send({ ok: true })
    }
}

export default saveStatus