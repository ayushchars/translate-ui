import connectDB from "../../utils/connectDb";
import Url from "../../model/url"; 
export default async function handler(req, res) {
    await connectDB();

    if (req.method === "GET") {
        try {
            const urlEntry = await Url.findOne();

            if (!urlEntry) {
                return res.status(404).json({ success: false, message: "No URL found" });
            }

            return res.status(200).json({ success: true, data: urlEntry });
        } catch (error) {
            return res.status(500).json({ success: false, error: "Server error" });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
