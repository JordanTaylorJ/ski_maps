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
    ski = RestClient.get("https://skimap.org/SkiAreas/.json")
    ski_array = JSON.parse(ski)
    ski_array.each do |s|
        Resort.create(
            name: s["name"],
            website: s["official_website"],
            terrain_park: s["terrain_park"],
            night_skiing: s["night_skiing"],
            operating_status: s["operating_status"],
            latitude: s["latitude"],
            longitude: s["longitude"]
        )
    end
end


puts 'seeded!'