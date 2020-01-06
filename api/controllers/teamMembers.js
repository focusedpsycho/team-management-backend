const constants = require('../constants');
const { validationResult } = require('express-validator');
const teamMembersService = require('../../services/teamMembersService');
const utils = require('../utils');


exports.getTeamMembers = async (req, res) => {
    let start = 0;
    let count = constants.DEFAULT_RESPONSE_COUNT;

    if (req.query.start) {
            start = parseInt(req.query.start);
        }
    if (req.query.count) {
            count = parseInt(req.query.count);
        }
    
    if(isNaN(start) || isNaN(count)){
        return res.status(constants.HttpCodes.BAD_REQUEST)
        .send({ "message": "start and count must be integers" });
    }

    let teamMembers = null;
    try {
        teamMembers = await teamMembersService.getAllTeamMembers(start, count);
    }
    catch (e) {
        return res.status(constants.HttpCodes.SERVER_ERROR)
        .send({ "message": "Unexpected Error" });
    }
    return res.status(constants.HttpCodes.STATUS_OK).send(teamMembers);
}

exports.editTeamMember = async (req, res) => {
    const reqBodyErrors = validationResult(req);
    if (!reqBodyErrors.isEmpty()) {
        return res.status(constants.HttpCodes.BAD_REQUEST)
        .json({ errors: reqBodyErrors.array() });
    }

    let editedTeamMember = req.body;
    try {
        editedTeamMember = await teamMembersService.editTeamMember(editedTeamMember);
    }
    catch (e) {
        return res.status(constants.HttpCodes.SERVER_ERROR)
            .send({ "message": "Unexpected Error" });
    }
    if (!editedTeamMember) {
        return res.status(constants.HttpCodes.BAD_REQUEST)
            .send({ "message": "Team Member with ID does not Exist" });
    }
    return res.status(constants.HttpCodes.STATUS_OK).send(editedTeamMember);
}

exports.addTeamMember = async (req, res) => {
    const reqBodyErrors = validationResult(req);
    if (!reqBodyErrors.isEmpty()) {
        return res.status(constants.HttpCodes.BAD_REQUEST)
        .json({ errors: reqBodyErrors.array() });
    }

    newTeamMember = req.body;
    newTeamMember.memberId = utils.generateTeamMemberId();
    let insertedTeamMember;
    try {
        insertedTeamMember = await teamMembersService.addTeamMember(newTeamMember);
    }
    catch (e) {
        return res.status(constants.HttpCodes.SERVER_ERROR)
            .send({ "message": "Unexpected Error" });
    }
    return res.status(constants.HttpCodes.STATUS_OK).send(insertedTeamMember)
}

exports.deleteTeamMember = async (req, res) => {
    const teamMemberId = req.params.memberid;
    let successfulDeletion = null;
    try {
        successfulDeletion = await teamMembersService.deleteTeamMember(teamMemberId);
    }
    catch (e) {
        console.log(e);
        return res.status(constants.HttpCodes.SERVER_ERROR)
            .send({ "message": "Unexpected Error" });
    }

    if (!successfulDeletion) {
        return res.status(constants.HttpCodes.BAD_REQUEST)
            .send({ "message": "Team Member with ID does not Exist" });
    }
    return res.status(constants.HttpCodes.STATUS_OK).send({ "status": "ok" })


}
