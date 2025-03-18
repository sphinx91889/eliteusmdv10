import React from 'react'

export default function ContactForm() {
  return (
    <section className="py-24 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 card-title text-primary-dark">Enhance Your Practice</h2>
            <h3 className="text-3xl font-semibold mb-8 text-secondary">Let's Chat</h3>
            
            <div className="h-[762px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/uKVg5F9YDtQd3nKLbJoS"
                style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                id="inline-uKVg5F9YDtQd3nKLbJoS" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="EliteUSMD"
                data-height="762"
                data-layout-iframe-id="inline-uKVg5F9YDtQd3nKLbJoS"
                data-form-id="uKVg5F9YDtQd3nKLbJoS"
                title="EliteUSMD"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-primary/10"></div>
            <img 
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
              alt="Professional medical consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-accent-sage/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
