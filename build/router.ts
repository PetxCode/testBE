import { Router } from "express";
import { bulkPost, bulkRead } from "./controller";
import upload from "./multer";
// import multer from "multer";
// const upload = multer().single("file");
// const upload = multer().single("file");

const router: Router = Router();

router.route("/").post(upload, bulkPost);
router.route("/").get(bulkRead);

export default router;
