package entity

type Investor struct {
	ID string `json:"id"`
	Name string `json:"name"`
	AssetPosition []*InvestorAssetPosition `json:"asset_position"`
}

func NewInvestor(id string) *Investor {
	return &Investor{
		ID: id,
		AssetPosition: []*InvestorAssetPosition{},
	}
}

func (i *Investor) AddAssetPosition(assetPosition *InvestorAssetPosition) {
	i.AssetPosition = append(i.AssetPosition, assetPosition)
}

func (i *Investor) AdjustAssetPosition(assetID string, qtdShares int) {
	// TO-DO iniciar pegando a posição de um asset especifico assetID
	assetPosition := i.GetAssetPosition(assetID)
	if assetPosition == nil {
		i.AssetPosition = append(i.AssetPosition, NewInvestorAssetPosition(assetID, qtdShares))
	} else{
		assetPosition.AddShares(qtdShares)
	}

}

func(i *Investor) GetAssetPosition(assetID string) *InvestorAssetPosition {
	for _, position := range i.AssetPosition {
		if position.AssetID == assetID {
			return position
		}
	}
	return nil
}

type InvestorAssetPosition struct {
	AssetID string `json:"asset_id"`
	Shares int `json:"shares"`
}

func NewInvestorAssetPosition(assetID string, shares int) *InvestorAssetPosition {
	return &InvestorAssetPosition{
		AssetID: assetID,
		Shares: shares,
	}
}

func (iap *InvestorAssetPosition) AddShares(qtd int) {
	iap.Shares += qtd
}