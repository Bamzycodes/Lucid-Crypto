const jwt = require("jsonwebtoken"); 
const User = require("../model/auth");

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.redirect("/login")
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.redirect("/login");
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = protectRoute; 