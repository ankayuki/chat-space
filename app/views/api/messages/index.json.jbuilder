json.array! @messages do |message|
  json.content message.content
  json.image message.image.url
  json.user_name message.user.name
  json.date message.created_at.strftime("%Y/%m/%d %H:%M")
  json.id message.id
end
