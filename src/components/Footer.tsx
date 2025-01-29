import '/src/assets/css/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/tonGitHub" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/footer/githubRed.png" alt="github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tonLinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/footer/linkedinRed.png" alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://waveemusic.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/footer/waveeRed.png" alt="wavee" />
            </a>
          </li>
          <li>
            <a href="mailto:tonEmail@gmail.com">
            <img src="src/assets/images/footer/mailRed.png" alt="mail" />

            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer