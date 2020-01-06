CREATE DEFINER=`root`@`localhost` FUNCTION `team`.`delete_team_member`(
customMemberId varchar(50)
) RETURNS tinyint(1)
    MODIFIES SQL DATA
begin
    declare existing_team_member json;
    select get_team_member_by_id(customMemberId)
    into existing_team_member;
   if existing_team_member is null then
      return  false;
   end if;
   update team_members
   set team_member_status=2
   where custom_member_id = customMemberId;
   return true;
   
end