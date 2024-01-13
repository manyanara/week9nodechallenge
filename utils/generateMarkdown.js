// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = license.toLowerCase();

   // Shields.io URL for GitHub license badge
   const shieldsUrl = `https://img.shields.io/github/license-${badge}.svg`;

   return shieldsUrl;
   console.log(shieldsUrl)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(username, repository, license) {

  const licenseLink = `https://github.com${username}/${repository}/blob/main/${license}`
  return licenseLink
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const shieldsUrl = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  `## License
  Distributed under ${license}. 
  The badge :
  ![License](${shieldsUrl})
  the URL:
  ${licenseLink} `
}



module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};