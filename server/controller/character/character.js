const axios = require("axios");

module.exports.getCharacterInfo = async (request, response, next) => {
  try {
    const url = "https://rickandmortyapi.com/api/character";
    const result = await axios({
      url: url,
      method: "get",
    });

    return response.status(201).json({
      success: true,
      message: "Data fetched successfully!",
      data: result.data,
    });
  } catch (error) {
    console.log(
      "Server Error at getCharacterInfo in character/character => Error : ",
      error
    );
    return response.status(500).json({
      success: false,
      message: "Server Error! Failed to get data!",
      data: error,
    });
  }
};
