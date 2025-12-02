import HTMLFlipBook from "react-pageflip";

function Book (props) {
    //const pageDate = [

   // ];

    return (
        <HTMLFlipBook 
            width={370} 
            height={500}
       //     maxShadowOpacity={0.5}
        //    drawShadow={true}
          //  showCover={true}
         //   size={fixed}
        >
            <div className="page" style={{ background: 'transparent' }}>
                <div className="page-content cover">
                    <img
                    src="C:\Users\owlly\OneDrive\Desktop\PortfolioNodeFix\GDPortfolio\src\assets\ArtistGuidePages.png"
                    alt="Cover"
                    className="coverPage"
                    />
                </div>
            </div>
            
        </HTMLFlipBook>
    );
}

export default Book;