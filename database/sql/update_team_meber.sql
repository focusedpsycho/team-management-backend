create function update_team_member(
customMemberId varchar(50),
first_name varchar(255),
last_name varchar(255),
phone_number varchar(20),
email varchar(255),
memberRole Enum('admin', 'regular'),
photo_url text
)
returns json modifies sql data
begin
      update team_members
       set member_first_name = coalesce(first_name, member_first_name),
       member_last_name = coalesce(last_name, member_last_name),
       member_phone_number = coalesce(phone_number, member_phone_number),
       member_email = coalesce(email, member_email),
       member_role = coalesce(memberRole,member_role),
       member_photo_url = coalesce(photo_url, member_photo_url),
       last_updated_at = now()
      where custom_member_id = customMemberId;
      
      return get_team_member_by_id(customMemberId);
end