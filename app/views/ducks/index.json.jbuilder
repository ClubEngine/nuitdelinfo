json.array!(@ducks) do |duck|
  json.extract! duck, :id, :name, :description
  json.url duck_url(duck, format: :json)
end
