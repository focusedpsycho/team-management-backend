CREATE DEFINER=`root`@`localhost` FUNCTION `team`.`add_team_member`(
customMemberId varchar(50),
first_name varchar(255),
last_name varchar(255),
phone_number varchar(20),
email varchar(255),
memberRole Enum('admin', 'regular')
) RETURNS json
    MODIFIES SQL DATA
begin
      insert into team_members
      (custom_member_id,
       member_first_name,
       member_last_name,
       member_phone_number,
       member_email,
       member_role)
       values(
         customMemberId,
         first_name,
         last_name,
         phone_number,
         email,
         memberRole
       );
      
      return get_team_member_by_id(customMemberId);
end