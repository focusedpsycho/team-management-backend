const express = require('express')
const router = express.Router()
const teamMembersController = require('./controllers/teamMembers')
const {addTeamMemberSchema, updateTeamMemberSchema} = require('./validators');

router.get('/members/get-all', teamMembersController.getTeamMembers);
router.put('/members/edit',[updateTeamMemberSchema],teamMembersController.editTeamMember);
router.post('/members/add',[addTeamMemberSchema], teamMembersController.addTeamMember);
router.delete('/members/remove/:memberid', teamMembersController.deleteTeamMember);

router.get('*', function(req, res){
    res.status(404).send({message:'The requested resource was not found, Please check the Url'});
  });

module.exports = router;

