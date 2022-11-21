const ProfileModel = require("../../model/profile");

module.exports.addProfile = async (request, response, next) => {
  try {
    const { name, profilePic, role, rating, location, about, skills } =
      request.body;

    const profile = await ProfileModel.create({
      name,
      profilePic,
      role,
      rating,
      location,
      about,
      skills,
    });

    return response.status(201).json({
      success: true,
      message: "Profile added successfully!",
      data: profile,
    });
  } catch (error) {
    console.log(
      "Server Error at addProfile in profile/profile => Error : ",
      error
    );
    return response.status(500).json({
      success: false,
      message: "Server Error! Failed to add Profile!",
      data: error,
    });
  }
};

module.exports.getProfiles = async (request, response, next) => {
  try {
    const profiles = await ProfileModel.find();
    return response.status(201).json({
      success: true,
      message: "Profile fetched successfully!",
      data: profiles,
    });
  } catch (error) {
    console.log(
      "Server Error at getProfiles in profile/profile => Error : ",
      error
    );
    return response.status(500).json({
      success: false,
      message: "Server Error! Failed to get Profiles!",
      data: error,
    });
  }
};
