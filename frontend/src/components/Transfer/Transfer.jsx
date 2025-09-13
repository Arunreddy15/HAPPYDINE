import { ImAppleinc  } from "react-icons/im";
import { TfiAndroid } from "react-icons/tfi";
import './Transfer.css'
export default function Transfer() {
  return (
    <section id="transfer">
        <div className="transfer-inner-container">
            <div className="transfer-info">
                <div className="description">
                    <h2 className="text-3xl md:text-5xl font-bold">
                    Ready to Transform Your<br/>
                    <span className="text-primary block">Dining Experience?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                    Join thousands of food lovers who've already discovered their next favorite restaurant. 
                    Download DineApp today and never settle for a mediocre meal again.
                    </p>
                </div>

                <div className="transfer-dwnld">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div size="lg" className="buttons ios">
                            <ImAppleinc size={20} className="dwnld-icons" />
                            Download for iOS
                        </div>
                        <div size="lg" className="buttons and">
                            <TfiAndroid size={20} className="dwnld-icons" />
                            Download for Android
                        </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                    Free to download • Available on all devices • No ads, ever
                    </p>
                </div>

                <div className="tranfer-dwnld-info">
                    <div className="dwnld-metrics">
                        <div className="metric-number">500K+</div>
                        <div className="text-sm text-muted-foreground">Downloads</div>
                    </div>
                    <div className="dwnld-metrics">
                        <div className="metric-number">10K+</div>
                        <div className="text-sm text-muted-foreground">Restaurants</div>
                    </div>
                    <div className="dwnld-metrics">
                        <div className="metric-number">1M+</div>
                        <div className="text-sm text-muted-foreground">Bookings</div>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1585036743871-3c89f30286b2?q=80&w=797&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
    </section>
  )
}
