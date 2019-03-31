FactoryBot.define do

  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/app/assets/images/my-image.jpg")}
    group
    user
  end
end
