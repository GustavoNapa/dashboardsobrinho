import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  // Close any open menu accordions when window is resized below 768px
  // $(window).resize(function() {
  //   if ($(window).width() < 768) {
  //     $('.sidebar .collapse').collapse('hide');
  //   };
  // });

  // window.addEventListener('resize', function(){
  //   if(window.innerWidth < 768){
  //     document.querySelector('.sidebar .collapse')
  //   }
  // });


  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Site do Sobrinho Website 2021</span>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </div>
  )
}
