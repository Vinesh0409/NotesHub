import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please provide a name"],
		minlength: 3,
		maxlength: 25,
	},
	email: {
		type: String,
		required: [true, "please provide a email"],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"please provide valid email",
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "please provide password"],
	},
});

userSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
	return jwt.sign(
		{
			userid: this._id,
		},
		process.env.SECRET_JWT,
		{ expiresIn: "1d" },
	);
};

userSchema.methods.matchPassword = async function (candidatePassword) {
	const ismatch = await bcrypt.compare(candidatePassword,this.password);
	return ismatch;
}

export default mongoose.model("User", userSchema);
