import {generatePoints} from '../fish/route-point.js';
import {getDestination, getAllDestinationNames} from '../fish/destination.js';
import {getOffer, getOffersByType, getOfferTypes, getAllOffersList} from '../fish/offer.js';


const getEnrichedPoints = () => generatePoints().map((point) => ({
  basePrice: point.basePrice,
  dateFrom: point.dateFrom,
  dateTo: point.dateTo,
  destination: getDestination(point.destination),
  id: point.id,
  offers: point.offers.map(getOffer),
  type: point.type,
}));


export default class PointsModel {
  #points = getEnrichedPoints();

  get points() {
    return this.#points;
  }

  getOffersByType = (type) => getOffersByType(type);
  getDestination = (id) => getDestination(id);
  getAllDestinationNames = () => getAllDestinationNames();

  getOfferTypes = () => getOfferTypes();

  getAllOffersList = () => getAllOffersList();
}