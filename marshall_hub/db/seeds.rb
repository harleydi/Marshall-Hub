# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do 
    @user = User.create!(
        digiCode: Faker::Number.between(from: 1000, to: 3000),
        name: Faker::Name.name,
        age: Faker::Number.between(from: 18, to: 60),
        username: Faker::Name.unique.name,
        password: 'null',
        email: Faker::Internet.email
    )
    20.times do
        @case = @user.cases.build(
            victim_name: Faker::Name.name,
            victim_age: Faker::Number.between(from: 13, to: 60),
            victim_ethnic: Faker::Demographic.race,
            incident_location: Faker::Address.community,
            charges: Faker::Educator.subject,
            description: Faker::Lorem.paragraph(sentence_count: 5),
            detained: Faker::Boolean.boolean,
            cops_present: Faker::Number.between(from: 1, to: 4),
            photo_url: Faker::Placeholdit.image(size: '50x50'),
            officer_name: Faker::Name.name,
            office_age: Faker::Number.between(from: 18, to: 60),
            officer_ethnic: Faker::Demographic.race,
            officer_nature: Faker::Verb.base,
            miranda_rights: Faker::Boolean.boolean,
            user_id: Faker::Number.between(from: 1, to: 10)
        )
    end
    @case.save!

end


30.times do
    Comment.create!(
        title: Faker::Lorem.sentence,
        body: Faker::Lorem.paragraph(sentence_count: 3, supplemental: true),
        user_id: Faker::Number.between(from: 1, to: 10),
        case_id: Faker::Number.between(from: 1, to: 10)
    )
end


