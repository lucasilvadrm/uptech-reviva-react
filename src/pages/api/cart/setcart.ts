import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    fs.writeFileSync(path.join("cart/cart.json"), req.body, "utf8");

    return res.status(200).json({});
  }

  return res.status(404).json({ message: "not found" });
}
