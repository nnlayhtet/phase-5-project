# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

u1 = User.create(username: "nyi", password: "111")
u2 = User.create(username: "lay", password: "111")
u3 = User.create(username: "htet", password: "111")
u4 = User.create(username: "win", password: "111")

g1 = Group.create(topic: "Topic 1", created_by: u1.username, user_id: u1.id)
g2 = Group.create(topic: "Topic 2", created_by: u2.username, user_id: u2.id)
g3 = Group.create(topic: "Topic 3", created_by: u3.username, user_id: u3.id)
g4 = Group.create(topic: "Topic 4", created_by: u4.username, user_id: u4.id)

m1 = Message.create(content: "message1", group_id: g1.id, user_id: u1.id)
m2 = Message.create(content: "message2", group_id: g1.id, user_id: u1.id)
m3 = Message.create(content: "message3", group_id: g1.id, user_id: u1.id)
m4 = Message.create(content: "message4", group_id: g1.id, user_id: u1.id)
m5 = Message.create(content: "message5", group_id: g1.id, user_id: u1.id)
m6 = Message.create(content: "message6", group_id: g1.id, user_id: u1.id)

jg1 = JoinedGroup.create(user_id:u1.id, group_id:g1.id)
jg2 = JoinedGroup.create(user_id:u2.id, group_id:g2.id)
jg3 = JoinedGroup.create(user_id:u3.id, group_id:g3.id)
jg4 = JoinedGroup.create(user_id:u4.id, group_id:g4.id)
jg5 = JoinedGroup.create(user_id:u1.id, group_id:g2.id)
jg6 = JoinedGroup.create(user_id:u1.id, group_id:g3.id)

puts "Done Seeding."