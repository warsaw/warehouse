/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "forksCount",
    "forksUrl",
    "openIssuesCount",
    "openIssuesUrl",
    "starrersCount",
    "starrersUrl",
    "openMRsCount",
    "openMRsUrl",
  ];

  updateStats(stats) {
    this.forksCountTarget.textContent = stats.forks;
    this.forksUrlTarget.href = stats.forks_url;
    this.openIssuesCountTarget.textContent = stats.issues;
    this.openIssuesUrlTarget.href = stats.issues_url;
    this.openMRsCountTarget.textContent = stats.MRs;
    this.openMRsUrlTarget.href = stats.MRs_url;
    this.starrersCountTarget.textContent = stats.starrers;
    this.starrersUrlTarget.href = stats.starrers_url;

    // unhide the container now that the data is populated
    this.element.classList.remove("hidden");
  }
}
