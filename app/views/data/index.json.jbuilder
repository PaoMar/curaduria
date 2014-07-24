json.array!(@data) do |datum|
  json.extract! datum, :id, :definicion, :anio, :siglas, :valor
  json.url datum_url(datum, format: :json)
end
