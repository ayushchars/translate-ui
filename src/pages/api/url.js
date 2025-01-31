import connectDB from "../../utils/connectDb";
import Url from "../../model/url"; 
export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        try {
            const { name } = req.body;

            if (!name) {
                return res.status(400).json({ error: "URL name is required" });
            }

            const urlCount = await Url.countDocuments();

            if (urlCount === 1) {
                const updatedUrl = await Url.findOneAndUpdate({}, { name }, { new: true });
                return res.status(200).json({ success: true, message: "URL updated successfully", data: updatedUrl });
            } else if (urlCount === 0) {
                const newUrl = new Url({ name });
                await newUrl.save();
                return res.status(201).json({ success: true, message: "URL created successfully", data: newUrl });
            } else {
                return res.status(400).json({ error: "More than one entry exists. Cannot update." });
            }
        } catch (error) {
            return res.status(500).json({ success: false, error: "Server error" });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}