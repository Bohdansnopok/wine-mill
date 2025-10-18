import './CatalogDropdown.scss'

export const CatalogDropdown = () => {
    return (
        <div className="dropdowns">
          <div className="dropdown">
            <select>
              <option>Бестселлеры A-Z</option>
              <option>Бестселлеры Z-A</option>
            </select>
          </div>

          <div className="wrapper">
            <div className="dropdown">
              <select>
                <option>Цена ↑</option>
                <option>Цена ↓</option>
              </select>
            </div>
            <div className="dropdown">
              <select>
                <option>Производитель A-Z</option>
                <option>Производитель Z-A</option>
              </select>
            </div>
            <div className="dropdown">
              <select>
                <option>Винтаж ↑</option>
                <option>Винтаж ↓</option>
              </select>
            </div>
          </div>
        </div>
    )
}