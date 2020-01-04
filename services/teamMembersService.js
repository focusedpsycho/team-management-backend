const connectionPool = require('../database/driver/connectionPool')

exports.getAllTeamMembers = async (start, count) => {
  const [rows, result] = await connectionPool
    .execute("select get_all_team_members(?,?)", [start, count]);
  return rows[0][result[0].name];


};

exports.editTeamMember = async (teamMember) => {
  const [rows, result] = await connectionPool
    .execute("select update_team_member(?,?,?,?,?,?)", [
      teamMember.memberId,
      teamMember.firstName ? teamMember.firstName : null,
      teamMember.lastName ? teamMember.lastName : null,
      teamMember.phoneNumber ? teamMember.phoneNumber : null,
      teamMember.emailId ? teamMember.emailId : null,
      teamMember.roleType ? teamMember.roleType : null
    ]);
  return rows[0][result[0].name];
};

exports.addTeamMember = async (teamMember) => {
  const [rows, result] = await connectionPool
    .execute("select add_team_member(?,?,?,?,?,?)", [
      teamMember.memberId,
      teamMember.firstName,
      teamMember.lastName,
      teamMember.phoneNumber,
      teamMember.emailId,
      teamMember.roleType
    ]);
  return rows[0][result[0].name];
};



exports.deleteTeamMember = async (teamMemberId) => {
  const [rows, result] = await connectionPool
    .execute("select delete_team_member(?)", [teamMemberId]);
  return rows[0][result[0].name];
};
