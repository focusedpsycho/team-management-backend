const uuidv4 = require('uuid/v4');


module.exports.generateTeamMemberId = ()=>{
    const uniqueTeamMemberId = 'TMID' + uuidv4() + Math.round(Date.now()/1000);
    return uniqueTeamMemberId;
    
}