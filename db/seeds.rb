# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'rest-client'


Resort.destroy_all
puts "🌱 Seeding spices..."

u1 = User.create(username: "Admin", password: "12345")
u2 = User.create(username: "John", password: "beatles")
u3 = User.create(username: "Paul", password: "beatles")
u4 = User.create(username: "Ringo", password: "beatles")
u5 = User.create(username: "George", password: "beatles")

#Resorts
r1 = Resort.create(
    name: "Breckenridge",
    website: "www.breckenridge.com",
    elevation: 3962,
    operating_status: true,
    latitude: "39.472250035504",
    longitude: "-106.06571187716",
    terrain_park: true,
    night_skiing: false,
    lift_count: 18,
    run_count: 155,
    map: 'https://skimap.org/data/510/150/1665455999jpg_render.jpg'
)
r2 = Resort.create(
    name: "Monarch",
    website: "www.skimonarch.com",
    elevation: 3646,
    operating_status: true,
    latitude: "38.509782375",
    longitude: "-106.33707308036",
    terrain_park: true,
    night_skiing: false,
    lift_count: 5,
    run_count: 63,
    map: 'https://skimap.org/data/511/3535/1634341976thumb1600w.jpg'
)
r3 = Resort.create(
    name: "Cooper",
    website: "www.skicooper.com",
    elevation: 3566,
    operating_status: true,
    latitude: "39.360555555556",
    longitude: "-106.30222222222",
    terrain_park: false,
    night_skiing: false,
    lift_count: 4,
    run_count: 41,
    map: 'https://skimap.org/data/512/3535/1634338606thumb1600w.jpg'
)
r4 = Resort.create(
    name: "Purgatory",
    website: "www.durangomountainresort.com",
    elevation: 3299,
    operating_status: true,
    latitude: "37.626495219635",
    longitude: "-107.83545101781",
    terrain_park: true, 
    night_skiing: false,
    lift_count: 9,
    run_count: 85,
    map: 'https://skimap.org/data/518/2200/1576454357jpg_render.jpg'

)
r5 = Resort.create(
    name: "Keystone Resort",
    website: "www.keystone.snow.com",
    elevation: 3782,
    operating_status: true,
    latitude: "39.584144457675",
    longitude: "-105.94428458757",
    terrain_park: true,
    night_skiing: true,
    lift_count: 20,
    run_count: 135,
    map: 'https://skimap.org/data/519/2200/1632084626jpg_render.jpg'
)
r6 = Resort.create(
    name: "Powderhorn Resort",
    website: "www.powderhorn.com",
    elevation: 3002,
    operating_status: true,
    latitude: "39.061300338828",
    longitude: "-108.15178072344",
    terrain_park: true,
    night_skiing: false,
    lift_count: 10,
    run_count: 45,
    map: 'https://skimap.org/data/420/4359/1645398583thumb1600w.jpg'
)
r7 = Resort.create(
    name: "Beaver Creek Resort",
    website: "https://www.beavercreek.com/",
    elevation: 3487,
    operating_status: true,
    latitude: "39.604486773498",
    longitude: "-106.52963303698",
    terrain_park: true,
    night_skiing: false,
    lift_count: 16,
    run_count: 148,
    map: 'https://skimap.org/data/497/4070/1677369962jpg_render.jpg'
)
r8 = Resort.create(
    name: "Steamboat Ski Resort",
    website: "http://www.steamboat.com",
    elevation: 3221,
    operating_status: true,
    latitude: "40.454623669065",
    longitude: "-106.76679185612",
    terrain_park: true,
    night_skiing: true,
    lift_count: 18,
    run_count: 165,
    map: 'https://skimap.org/data/500/5095/1666756974jpg_render.jpg'
)
r9 = Resort.create(
    name: "Aspen Snowmass",
    website: "http://www.aspensnowmass.com",
    elevation: 3417,
    operating_status: true,
    latitude: "39.169535820477",
    longitude: "-106.82169548387",
    terrain_park: false,
    night_skiing: false,
    lift_count: 8,
    run_count: 76,
    map: 'https://skimap.org/data/1031/3535/1676164420jpg_render.jpg'
)
r10 = Resort.create(
    name: "Winter Park Resort",
    website: "http://www.winterparkresort.com/",
    elevation: 3676,
    operating_status: true,
    latitude: "39.86649544702",
    longitude: "-105.77944558812",
    terrain_park: true,
    night_skiing: false,
    lift_count: 25,
    run_count: 143,
    map: 'https://skimap.org/data/503/5098/1666803394jpg_render.jpg'
)
r11 = Resort.create(
    name: "Wolf Creek Ski Area",
    website: "http://www.wolfcreekski.com/",
    elevation: 3628,
    operating_status: true,
    latitude: "37.467280431035",
    longitude: "-106.79447673197",
    terrain_park: false,
    night_skiing: false,
    lift_count: 7,
    run_count: 77,
    map: 'https://skimap.org/data/505/3535/1634337883jpg_render.jpg'
)
r12 = Resort.create(
    name: "Vail",
    website: "http://www.vail.snow.com",
    elevation: 3527,
    operating_status: true,
    latitude: "39.616036308293",
    longitude: "-106.36287840345",
    terrain_park: true,
    night_skiing: false,
    lift_count: 32,
    run_count: 193,
    map: 'https://skimap.org/data/507/3535/1664218364thumb1600w.jpg'
)
r13 = Resort.create(
    name: "Copper Mountain Resort",
    website: "http://www.coppercolorado.com",
    elevation: 3753,
    operating_status: true,
    latitude: "39.483055192308",
    longitude: "-106.16057210355",
    terrain_park: true,
    night_skiing: false,
    lift_count: 21,
    run_count: 125,
    map: 'https://skimap.org/data/509/3535/1668473559jpg_render.jpg'
)
r14 = Resort.create(
    name: "Arapahoe Basin",
    website: "http://www.arapahoebasin.com",
    elevation: 3978,
    operating_status: true,
    latitude: "39.630512380253",
    longitude: "-105.87417271381",
    terrain_park: true,
    night_skiing: false,
    lift_count: 7,
    run_count: 105,
    map: 'https://skimap.org/data/513/150/1665456205jpg_render.jpg'
)
r15 = Resort.create(
    name: "Crested Butte Mountain Resort",
    website: "http://www.skicb.com/",
    elevation: 3707,
    operating_status: true,
    latitude: "38.899358982536",
    longitude: "-106.94795572513",
    terrain_park: true,
    night_skiing: false,
    lift_count: 16,
    run_count: 121,
    map: 'https://skimap.org/data/514/5095/1668817056jpg_render.jpg'
)
r16 = Resort.create(
    name: "Telluride",
    website: "http://tellurideskiresort.com/",
    elevation: 3735,
    operating_status: true,
    latitude: "37.921991748041",
    longitude: "-107.83657695611",
    terrain_park: true,
    night_skiing: false,
    lift_count: 18,
    run_count: 147,
    map: 'https://skimap.org/data/517/2200/1637368445jpg_render.jpg'
)
r17 = Resort.create(
    name: "Silverton Mountain",
    website: "http://www.silvertonmountain.com/page/home",
    elevation: 3750,
    operating_status: true,
    latitude: "37.876208396349",
    longitude: "-107.65365600586",
    terrain_park: false,
    night_skiing: false,
    lift_count: 1,
    run_count: 0,
    map: 'https://skimap.org/data/2280/3535/1573356158.jpg'
)
r18 = Resort.create(
    name: "Loveland",
    website: "http://www.skiloveland.com/",
    elevation: 3965,
    operating_status: true,
    latitude: "39.678323876567",
    longitude: "-105.89910611379",
    terrain_park: true,
    night_skiing: false,
    lift_count: 10,
    run_count: 70,
    map: 'https://skimap.org/data/515/2200/1666208042thumb1600w.jpg'
)
r19 = Resort.create(
    name: "Ski Granby Ranch",
    website: "http://www.granbyranch.com/",
    elevation: 2805,
    operating_status: true,
    latitude: "40.044568999107",
    longitude: "-105.90567111969",
    terrain_park: true,
    night_skiing: false,
    lift_count: 5,
    run_count: 33,
    map: 'https://skimap.org/data/516/2200/1670552124thumb1600w.jpg'
)
r20 = Resort.create(
    name: "Echo Mountain",
    website: "https://www.echomountainresort.com/",
    elevation: 3063,
    operating_status: true,
    latitude: "39.685",
    longitude: "-105.51944444444",
    terrain_park: true,
    night_skiing: true,
    lift_count: 3,
    run_count: 8,
    map: 'https://skimap.org/data/1034/2200/1666984675thumb1600w.jpg'
)

#Bookmarks 
Bookmark.create(
    resort_id: r2.id,
    user_id: u1.id,
    notes: "no crowds, sweet hikeout"
)
Bookmark.create(
    resort_id: r5.id,
    user_id: u1.id,
    notes: "Amazing back bowl on outback lift!"
)
Bookmark.create(
    resort_id: r15.id,
    user_id: u1.id,
    notes: "Lower T bar has my favorite runs."
)


#Comments
rand(20..30).times do
    Comment.create(
        resort_id: Resort.order("random()").first.id,
        user_id: User.order("random()").first.id,
        comment: Faker::Lorem.sentence
    )
end


puts 'seeded!'



=begin 

def ski_data 
    response = RestClient.get("https://skimap.org/SkiAreas/.json")
    ski_array = JSON.parse(response)
    ski_array.each do |s|
        if (s["Region"]["name"] == "Colorado")
            Resort.create(
                name: s["SkiArea"]["name"],
                website: s["SkiArea"]["official_website"],
                #elevation: s["SkiArea"]["top_elevation"],
                #operating_status: s["SkiArea"]["operating_status"],
                latitude: s["SkiArea"]["geo_lat"],
                longitude: s["SkiArea"]["geo_lng"]
                #terrain_park: s["SkiArea"]["terrain_park"],
                #night_skiing: s["SkiArea"]["night_skiing"],
            )
        end
    end
end

ski_data()

=end