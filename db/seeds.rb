# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'rest-client'


Resort.destroy_all

u1 = User.create(username: "Admin", password: "12345")

puts "Getting Ski Data"

r1 = Resort.create(
    name: "Breckenridge",
    website: "www.breckenridge.com",
    elevation: "3962",
    operating_status: true,
    latitude: "39.472250035504",
    longitude: "-106.06571187716"
)

Bookmark.create(
    resort_id: r1,
    user_id: User.order("random()").first.id,
    notes: "This is a note"
)

Resort.create(
    name: "Monarch",
    website: "www.skimonarch.com",
    elevation: "3646",
    operating_status: true,
    latitude: "38.509782375",
    longitude: "-106.33707308036"
)

Resort.create(
    name: "Cooper",
    website: "www.skicooper.com",
    elevation: "3566",
    operating_status: true,
    latitude: "39.360555555556",
    longitude: "-106.30222222222"
)

r4 = Resort.create(
    name: "Purgatory",
    website: "www.durangomountainresort.com",
    elevation: "3299",
    operating_status: true,
    latitude: "37.626495219635",
    longitude: "-107.83545101781"
)
Bookmark.create(
    resort_id: r4,
    user_id: User.order("random()").first.id,
    notes: "This is another note"
)

Resort.create(
    name: "Keystone Resort",
    website: "www.keystone.snow.com",
    elevation: "3782",
    operating_status: true,
    latitude: "39.584144457675",
    longitude: "-105.94428458757"
)

Resort.create(
    name: "Powderhorn Resort",
    website: "www.powderhorn.com",
    elevation: "3002",
    operating_status: true,
    latitude: "39.061300338828",
    longitude: "-108.15178072344"
)


#def ski_data 
#    response = RestClient.get("https://skimap.org/SkiAreas/.json")
#    ski_array = JSON.parse(response)
#    ski_array.each do |s|
#        if (s["SkiArea"]["geo_lat"] != 'null')
#            Resort.create(
#                name: s["SkiArea"]["name"],
#                website: s["SkiArea"]["official_website"],
#                elevation: s["SkiArea"]["top_elevation"],
#                operating_status: s["SkiArea"]["operating_status"],
#                latitude: s["SkiArea"]["geo_lat"],
#                longitude: s["SkiArea"]["geo_lng"]
#                #terrain_park: s["SkiArea"]["terrain_park"],
#                #night_skiing: s["SkiArea"]["night_skiing"],
#            )
#        end
#    end
#end

#ski_data()

puts 'seeded!'