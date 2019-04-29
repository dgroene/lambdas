exports.handler = async (event) => {
    console.log(event);
    let {name, age} = event;
    const createString = (name, age) => {
      return `Hi ${name}, you are ${age} years old.`  
    };
    // TOO implement
    const response = {
        statusCode: 200,
        body: createString(name, age),
    };
    return response;
};
