json.array!(@gifts) do |gift|
  json.extract! gift, :id, :name, :link, :description
  json.url gift_url(gift, format: :json)
end
