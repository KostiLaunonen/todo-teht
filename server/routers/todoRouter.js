import { pool } from '../helpers/db.js'
import { Router } from "express"
// import { emptyOrRows } from '../helpers/utils.js'
import { auth } from '../helpers/auth.js'
import { getTasks, postTask, deleteFromTask  } from '../controllers/TaskController.js'

const router = Router()

router.get('/', getTasks)

router.post('/create', postTask)

router.delete('/delete/:id', deleteFromTask)

export default router;