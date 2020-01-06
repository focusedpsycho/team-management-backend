CREATE DEFINER=`root`@`localhost` FUNCTION `team`.`get_all_team_members`(
result_start int, 
result_count int) RETURNS json
    READS SQL DATA
begin
   declare member_list json;
   select json_object('response', (select  json_arrayagg(json_object(
      'memberId', tm.custom_member_id,
      'firstName', tm.member_first_name,
      'lastName', tm.member_last_name,
      'roleType', tm.member_role,
      'phoneNumber', tm.member_phone_number,
      'emailId', tm.member_email
    ))  FROM 
   (select * from team_members
    where team_member_status = 1
    order by member_first_name
    limit result_start, result_count) as tm),
    'total', (select count(*) from team_members where team_member_status=1)
    ) into member_list;
   
   return member_list;
end