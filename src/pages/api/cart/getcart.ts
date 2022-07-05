import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {

    const FileData = fs.readFileSync( path.join('cart/cart.json'), "utf8");

    const data =  FileData ? JSON.parse(FileData) : [];

    return res.status(200).json(data);
  }

  return res.status(404).json({ message: "not found" });
}
