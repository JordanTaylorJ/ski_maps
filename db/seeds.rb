# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'rest-client'


u1 = User.create(username: "Admin", password: "12345")

puts "Getting Ski Data"

def ski_data 
    response = RestClient.get("https://skimap.org/SkiAreas/.json")
    ski_array = JSON.parse(response)
    ski_array.each do |s|
        Resort.create(
            name: s["SkiArea"]["name"],
            website: s["SkiArea"]["official_website"],
            elevation: s["SkiArea"]["top_elevation"],
            operating_status: s["SkiArea"]["operating_status"],
            latitude: s["SkiArea"]["geo_lat"],
            longitude: s["SkiArea"]["geo_lng"]
            #terrain_park: s["SkiArea"]["terrain_park"],
            #night_skiing: s["SkiArea"]["night_skiing"],
        )
    end
end

ski_data()

puts 'seeded!'