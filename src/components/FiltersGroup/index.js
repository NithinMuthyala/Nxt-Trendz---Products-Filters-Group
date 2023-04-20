import './index.css'

const FiltersGroup = props => {
  const {searchText} = props
  const clearedFilters = () => {
    const {clearFiltersButton} = props
    clearFiltersButton()
  }
  const onChangeSearchText = event => {
    const {onChangeSearchtext} = props
    onChangeSearchtext(event.target.value)
  }

  const enterKeyEnterd = event => {
    const {enterButtonClicked} = props
    if (event.key === 'Enter') {
      enterButtonClicked()
    }
  }
  const renderRatinglist = () => {
    const {ratingsList, onChangeRating} = props
    return ratingsList.map(eachRating => {
      const {ratingId, imageUrl} = eachRating
      const ratingClicked = () => {
        onChangeRating(ratingId)
      }
      return (
        <li key={ratingId} onClick={ratingClicked} className="rating-item-card">
          <img
            src={imageUrl}
            alt={`rating ${ratingId}`}
            className="rating-image"
          />
          <p>& up</p>
        </li>
      )
    })
  }

  const renderCategorylist = () => {
    const {categoryOptions, onChangeCategory} = props

    return categoryOptions.map(eachCategory => {
      const {categoryId, name} = eachCategory
      const categoryClicked = () => {
        onChangeCategory(categoryId)
      }
      return (
        <li key={categoryId} onClick={categoryClicked}>
          <p>{name}</p>
        </li>
      )
    })
  }
  return (
    <div className="filters-group-container">
      <div>
        <input
          type="search"
          onChange={onChangeSearchText}
          onKeyDown={enterKeyEnterd}
          value={searchText}
          placeholder="Serach"
        />
      </div>
      <h1>Category</h1>
      <ul className="category-list-container">{renderCategorylist()}</ul>
      <h1>Rating</h1>
      <ul className="rating-list-container">{renderRatinglist()}</ul>
      <button type="button" onClick={clearedFilters} className="clear-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
