package entity

type Asset struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	MarketVolume int `json:"market_volume"`
}

func NewAsset(id string, name string, marketVolume int) *Asset {
	return &Asset{
		ID: id,
		Name: name,
		MarketVolume: marketVolume,
	}
}