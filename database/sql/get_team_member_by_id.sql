CREATE DEFINER=`root`@`localhost` FUNCTION `team`.`get_team_member_by_id`(
customMemberId varchar(50)
) RETURNS json
    READS SQL DATA
begin
   declare team_member json;
   select  json_object(
      'memberId', tm.custom_member_id,
      'firstName', tm.member_first_name,
      'lastName', tm.member_last_name,
      'roleType', tm.member_role,
      'phoneNumber', tm.member_phone_number,
      'emailId', tm.member_email
    ) into team_member from team_members tm
    where custom_member_id = customMemberId
    and team_member_status =1;
   
   return team_member;   
end