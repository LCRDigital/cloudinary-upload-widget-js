const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dut68koei",
    uploadPreset: "TLCiQupload",
    sources: ["camera", "local"], // Only allow camera & local files
    multiple: true,              // (Optional) let them upload only one file at a time
    showAdvancedOptions: false,   // Hide advanced options like tags, etc.
    // You can include other settings as needed:
    // folder: "my-deals-folder",
    // cropping: true,
    // clientAllowedFormats: ["image"], // ensure only image files
    // maxImageFileSize: 2000000,      // restrict file size if needed
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Uploaded image info:", result.info);
      // Show the uploaded image in the <img> preview
      const uploadedImage = document.getElementById("uploadedimage");
      uploadedImage.setAttribute("src", result.info.secure_url);
      uploadedImage.style.display = "block";
    }
  }
);

document
  .getElementById("upload_widget")
  .addEventListener("click", function () {
    myWidget.open();
  }, false);
