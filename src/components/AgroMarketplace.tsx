import React, { useState } from 'react';
import { AgroDealer, AgroSupplyItem, SupportedLanguage } from '../types';
import { 
  Store, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Leaf, 
  FlaskConical, 
  Filter,
  Search,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface AgroMarketplaceProps {
  dealers: AgroDealer[];
  activeLocation: string;
  currentLanguage: SupportedLanguage;
}

export const AgroMarketplace: React.FC<AgroMarketplaceProps> = ({
  dealers,
  activeLocation,
  currentLanguage
}) => {
  const { t } = useTranslation(currentLanguage);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDealer, setSelectedDealer] = useState<AgroDealer | null>(null);

  const filteredDealers = dealers.filter(dealer => {
    if (!dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dealer.region.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dealer.supplies.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    return true;
  });

  return (
    <div id="agro-marketplace-view" className="space-y-6">
      
      {/* Marketplace Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 border border-emerald-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-extrabold bg-emerald-500 text-emerald-950 px-2 py-0.5 rounded">
              {t.localAgribusinessDirectory}
            </span>
            <span className="text-xs text-emerald-300">&bull; {t.fairPricing}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {t.nearbyDealersHeading}
          </h2>
          <p className="text-xs text-emerald-200/90 max-w-xl mt-1">
            {t.dealersSubheading}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/15 text-center shrink-0">
          <p className="text-[11px] text-emerald-300">{t.verifiedShopsRegion}</p>
          <p className="text-xl font-bold text-white mt-0.5">{dealers.length} {t.agroHubs}</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchSuppliesPlaceholder}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-600 outline-none text-slate-800"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filterType === 'all' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.allSupplies}
          </button>
          <button
            onClick={() => setFilterType('organic')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
              filterType === 'organic' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Leaf className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.organicOnly}</span>
          </button>
          <button
            onClick={() => setFilterType('chemical')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
              filterType === 'chemical' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>{t.curatives}</span>
          </button>
        </div>
      </div>

      {/* Dealer Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDealers.map((dealer) => {
          const displayedSupplies = dealer.supplies.filter(item => {
            if (filterType === 'organic' && !item.organic) return false;
            if (filterType === 'chemical' && item.organic) return false;
            return true;
          });

          return (
            <div
              key={dealer.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Dealer Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm text-slate-900">{dealer.name}</h3>
                        {dealer.verified && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" title="Verified Agribusiness" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {t.owner}: {dealer.ownerName} &bull; <span className="text-emerald-700 font-semibold">{dealer.distanceKm} km {t.away}</span>
                      </p>
                      <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate max-w-xs">{dealer.address}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-lg text-xs font-bold shrink-0">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{dealer.rating}</span>
                  </div>
                </div>

                {/* Stock Inventory Table / List */}
                <div className="space-y-2 pt-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {t.availableStockPricing}:
                  </p>
                  <div className="space-y-1.5">
                    {displayedSupplies.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-50 hover:bg-slate-100/80 p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs transition-colors"
                      >
                        <div className="space-y-0.5 pr-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900">{item.name}</span>
                            {item.organic && (
                              <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded uppercase">
                                Bio-Organic
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500">
                            {t.pkg}: {item.packageSize} &bull; {t.effectiveFor}: {item.effectiveFor.join(', ')}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-bold text-emerald-800 block text-xs">{item.price}</span>
                          <span className="text-[10px] text-emerald-600 font-semibold">{t.inStock}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/${dealer.whatsapp.replace(/\D/g, '')}?text=Hello%20${encodeURIComponent(dealer.name)},%20I%20saw%20your%20crop%20treatment%20stock%20on%20AgriShield%20app`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t.whatsappOrder}</span>
                </a>
                
                <a
                  href={`tel:${dealer.phone}`}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.call}</span>
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
