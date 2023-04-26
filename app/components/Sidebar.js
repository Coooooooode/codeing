const SideBar = () => (
  <ul className='main-nav-extended-list'>
    <li className='nav-item buttonable'>
      <div className='button-wrap--small unread-sign'>
        <svg viewBox='0 0 24 24' className='button-icon fill-primary'>
          <g>
            <path d='M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z'></path>
          </g>
        </svg>
      </div>
      <span className='text-large text-weight-medium pr-10'>Home</span>
    </li>

    <li className='nav-item buttonable'>
      <div className='button-wrap--small'>
        <svg viewBox='0 0 24 24' className='button-icon fill-primary-text'>
          <g>
            <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
          </g>
        </svg>
      </div>
      <span className='text-large text-weight-medium pr-10'>Explore</span>
    </li>

    

   

    <li className='nav-item buttonable'>
      <div className='button-wrap--small'>
        <svg viewBox='0 0 24 24' className='button-icon fill-primary-text'>
          <g>
            <path d='M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z'></path>
          </g>
        </svg>
      </div>
      <span className='text-large text-weight-medium pr-10'>Bookmarks</span>
    </li>





  </ul>
)

export default SideBar
