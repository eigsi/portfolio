import '/src/assets/css/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/eigsi" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/images/footer/githubRed.png" alt="github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/antoine-simon-a1105a2a2" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/footer/linkedinRed.png" alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://waveemusic.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/footer/waveeRed.png" alt="wavee" />
            </a>
          </li>
          <li>
            <a href="mailto:antoine.simon.26@eigsi.fr">
            <img src="src/assets/images/footer/mailRed.png" alt="mail" />

            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer