function shareNFT() {
  const nftUrl = document.getElementById("nft-url").value;
  const socialMedia = document.getElementById("social-media").value;

  // Here you can add your code to share the NFT on the selected social media platform.
  // For example, you can use the window.open() method to open the social media sharing dialog:

  switch (socialMedia) {
    case "twitter":
      window.open(`https://twitter.com/intent/tweet?text=Check out this NFT: ${nftUrl}`, '_blank');
      break;
    case "instagram":
      window.open(`https://www.instagram.com/sharing-dialog/?url=${nftUrl}`, '_blank');
      break;
    case "facebook":
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${nftUrl}`, '_blank');
      break;
    default:
      break;
  }
}
