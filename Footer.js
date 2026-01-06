import React from 'react'

export default function Footer() 
{
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "55px 0",
    marginTop: "900px",
    width: "100%",
    height:"150px"
  }
};
  return (
    <div>
    <footer style={styles.footer}>
    <center>
        <p>
            We are a community driven platform where readers can discover, review,
            and share their favorite books across multiple genres.
       </p>
      <p>© 2025 Book Review Application.</p>
      <p> All Rights Reserved.</p>
   

    </center>
     </footer>
    </div>
  )
}
