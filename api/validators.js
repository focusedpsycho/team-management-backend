const { checkSchema } = require("express-validator");

exports.updateTeamMemberSchema = checkSchema({
    memberId: {
        isString: true,
        isLength: {
            options: { min: 50, max: 50 },
            errorMessage: "Invalid format for memberId"
        },
        errorMessage: "member Id is required and must be a string"
    },
    firstName: {
        in: "body",
        optional: true,
        isString: true,
        isLength: {
            options: { min: 3, max: 255 },
            errorMessage: "minimum length is 3 and maximum is 255"
        },
        errorMessage: "First Name must be a String"
    },
    lastName: {
        in: "body",
        optional: true,
        isString: true,
        isLength: {
            options: { min: 3, max: 255 },
            errorMessage: "minimum length is 3 and maximum is 255"
        },
        errorMessage: "Last Name must be a string"
    },
    phoneNumber: {
        in: "body",
        optional: true,
        isString: true,
        isLength: {
            options: { min: 8, max: 15 },
            errorMessage: "minimum length is 3 and maximum is 255"
        },
        isNumeric: {
            errorMessage: "Not a valid phone number"
        },
        errorMessage: "Phone number must be sent as a string"
    },
    emailId: {
        in: "body",
        optional: true,
        isEmail: true,
        isLength: {
            options: { min: 7, max: 50 },
            errorMessage: "minimum length is 7 and maximum is 50"

        }
    },
    roleType: {
        in: "body",
        optional: true,
        matches: {
            options: [/\b(?:admin|regular)\b/],
            errorMessage: "Invalid role"
        }
    }
});

exports.addTeamMemberSchema = checkSchema({
    firstName: {
        isString: true,
        isLength: {
            options: { min: 3, max: 255 },
            errorMessage: "minimum length is 3 and maximum is 255"
        },
        errorMessage: "First Name is required and must be a String"
    },
    lastName: {
        isString: true,
        isLength: {
            options: { min: 3, max: 255 },
            errorMessage: "minimum length is 3 and maximum is 255"
        },
        errorMessage: "Last Name is required and must be a string"
    },
    phoneNumber: {
        isString: true,
        isLength: {
            options: { min: 8, max: 15 },
            errorMessage: "minimum length is 3 and maximum is 255"
        },
        isNumeric: {
            errorMessage: "Not a valid phone number"
        },
        errorMessage: "Phone number is required and must be sent as a string"
    },
    emailId: {
        isEmail: true,
        isLength: {
            options: { min: 7, max: 50 },
            errorMessage: "minimum length is 7 and maximum is 50"

        }
    },
    roleType: {
        matches: {
            options: [/\b(?:admin|regular)\b/],
            errorMessage: "Invalid role"
        },
        errorMessage: "role type is required and must be valid"
    }
});
