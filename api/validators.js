const { checkSchema } = require("express-validator");

exports.updateTeamMemberSchema = checkSchema({
    memberId: {
        isString: true,
        errorMessage: "member Id must be a string"
    },
    firstName: {
        in: "body",
        optional: true,
        isString: true,
        errorMessage: "First Name must be a String"
    },
    lastName: {
        in: "body",
        optional: true,
        isString: true,
        errorMessage: "Last Name must be a string"
    },
    phoneNumber: {
        in: "body",
        optional: true,
        isString: true,
        errorMessage: "Phone number must be sent as a string"
    },
    emailId: {
        in: "body",
        optional: true,
        isEmail: true
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
        errorMessage: "First Name is required and must be a String"
    },
    lastName: {
        isString: true,
        errorMessage: "Last Name is required and must be a string"
    },
    // Wildcards/dots for nested fields work as well
    phoneNumber: {
        // Make this field optional when undefined or null
        isString: true,
        errorMessage: "Phone number is required and must be sent as a string"
    },
    emailId: {
        isEmail: true
    },
    roleType: {
        matches: {
            options: [/\b(?:admin|regular)\b/],
            errorMessage: "Invalid role"
        },
        errorMessage: "role type is required and must be valid"
    }
});
